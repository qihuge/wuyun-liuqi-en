/**
 * 轻量 CommonJS → 浏览器 bundle 打包器
 * 扫描入口模块的 require 依赖树，生成浏览器可直接加载的单个 bundle.js
 *
 * 用法: node build/bundle.js <entry> <output>
 */
const fs = require('fs');
const path = require('path');

// ============ 1. 收集模块 ============
const moduleMap = new Map(); // absPath -> { id, code }

function resolveModule(fromDir, reqPath) {
  // 解析 require 路径（相对路径，无扩展名）
  let p = path.resolve(fromDir, reqPath);
  const candidates = [p, p + '.js', path.join(p, 'index.js')];
  for (const c of candidates) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) {
      return c;
    }
  }
  // 检查 package.json main
  const pkg = path.join(p, 'package.json');
  if (fs.existsSync(pkg)) {
    const main = JSON.parse(fs.readFileSync(pkg, 'utf8')).main;
    if (main) {
      const p2 = path.resolve(p, main);
      if (fs.existsSync(p2)) return p2;
    }
  }
  throw new Error(`Cannot resolve module: ${reqPath} (from ${fromDir})`);
}

function collect(absPath) {
  if (moduleMap.has(absPath)) return moduleMap.get(absPath);
  const id = moduleMap.size;
  moduleMap.set(absPath, { id, code: null, deps: {} });
  const code = fs.readFileSync(absPath, 'utf8');
  // 提取 require('./xxx') 或 require('../xxx')（相对路径）
  const relRe = /require\((['"])(\.\.?\/[^'"]+)\1\)/g;
  let m;
  const deps = {};
  while ((m = relRe.exec(code)) !== null) {
    const depAbs = resolveModule(path.dirname(absPath), m[2]);
    deps[m[2]] = collect(depAbs);
  }
  moduleMap.get(absPath).code = code;
  moduleMap.get(absPath).deps = deps;
  return moduleMap.get(absPath);
}

// ============ 2. 生成 bundle ============
function build(entryAbs, outFile) {
  collect(entryAbs);
  const lines = [];
  lines.push('/* Auto-generated bundle. Do not edit. */');
  lines.push('(function(modules) {');
  lines.push('  var cache = {};');
  lines.push('  function require(id) {');
  lines.push('    if (cache[id]) return cache[id].exports;');
  lines.push('    var module = cache[id] = { exports: {} };');
  lines.push('    modules[id](module, module.exports, require);');
  lines.push('    return module.exports;');
  lines.push('  }');
  lines.push('  return require(0);');
  lines.push('})({');
  for (const [absPath, mod] of moduleMap) {
    // 转换 deps 为 id 映射
    const depIds = {};
    for (const [req, depMod] of Object.entries(mod.deps)) {
      depIds[req] = depMod.id;
    }
    const depStr = JSON.stringify(depIds);
    // 重写模块内 require('./xxx') 为 require(<id>)
    let rewCode = mod.code;
    rewCode = rewCode.replace(/require\((['"])(\.\.?\/[^'"]+)\1\)/g, function(match, q, reqPath) {
      const depId = depIds[reqPath];
      if (depId === undefined) return match;
      return 'require(' + depId + ')';
    });
    const wrapped = [
      '"' + mod.id + '": function(module, exports, require) {',
      rewCode,
      '}'
    ].join('\n');
    lines.push(wrapped + ',');
  }
  lines.push('});');
  const bundle = lines.join('\n');
  fs.writeFileSync(outFile, bundle, 'utf8');
  console.log(`✓ Bundle written: ${outFile} (${moduleMap.size} modules)`);
}

// ============ 3. CLI ============
const [, , entryArg, outArg] = process.argv;
if (!entryArg || !outArg) {
  console.error('用法: node bundle.js <entry.js> <output.js>');
  process.exit(1);
}
const entryAbs = path.resolve(process.cwd(), entryArg);
const outAbs = path.resolve(process.cwd(), outArg);
build(entryAbs, outAbs);
