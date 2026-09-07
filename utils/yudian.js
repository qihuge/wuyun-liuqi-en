// ==============================================
// 郁点诱点分析核心算法库（整合版）
// ==============================================
import { calcFullYunQi } from './wuyunliuqi.js'

// 【严格按你定的五行生克关系】
const WUXING_SHENGKE = {
    ke: { '木': '土', '土': '水', '水': '火', '火': '金', '金': '木' },
    sheng: { '木': '火', '火': '土', '土': '金', '金': '水', '水': '木' }
}

// 【严格按你定的地支-五行-六气对应】
const DIZHI_MAP = {
    '寅': { wuxing: '木', liuqi: '少阳相火' },
    '卯': { wuxing: '木', liuqi: '阳明燥金' },
    '巳': { wuxing: '火', liuqi: '厥阴风木' },
    '午': { wuxing: '火', liuqi: '少阴君火' },
    '丑': { wuxing: '土', liuqi: '太阴湿土' },
    '未': { wuxing: '土', liuqi: '太阴湿土' },
    '辰': { wuxing: '土', liuqi: '太阳寒水' },
    '戌': { wuxing: '土', liuqi: '太阳寒水' },
    '申': { wuxing: '金', liuqi: '少阳相火' },
    '酉': { wuxing: '金', liuqi: '阳明燥金' },
    '亥': { wuxing: '水', liuqi: '厥阴风木' },
    '子': { wuxing: '水', liuqi: '少阴君火' }
}

// 【严格按你定的郁点-脏腑-经络关联（仅固化已确认的4个）】
const YUDIAN_GUANLIAN = {
    '丑': {
        core: '肝',
        channels: ['足厥阴肝经', '手厥阴心包经', '手太阴肺经', '足太阴脾经'],
        pangYu: '未',
        cangKu: '湿土藏金'
    },
    '未': {
        core: '肝',
        channels: ['足厥阴肝经', '手厥阴心包经', '手太阴肺经', '足太阴脾经'],
        pangYu: '丑',
        cangKu: '湿土藏木'
    },
    '巳': {
        core: '脾',
        channels: ['足太阴脾经', '足厥阴肝经', '手厥阴心包经', '手太阴肺经'],
        pangYu: '亥',
        cangKu: '火土藏金'
    },
    '亥': {
        core: '脾',
        channels: ['足太阴脾经', '足厥阴肝经', '手厥阴心包经', '手太阴肺经'],
        pangYu: '巳',
        cangKu: '水木藏火'
    }
}

/**
 * 核心郁点分析算法（整合版）
 * @param {string} yearGan 年天干
 * @param {string} yearZhi 年地支
 * @param {string[]} zhiList 四柱地支数组 [年支, 月支, 日支, 时支]
 * @returns {Object} 完整郁点诱点分析结果
 */
export function analyzeYuDian(yearGan, yearZhi, zhiList = [yearZhi]) {
    // 1. 保留原有五运六气基础计算
    const yunqi = calcFullYunQi(yearGan, yearZhi)
    const { suiYun, zhuYun, zhuQi, diZhiRelation } = yunqi

    const result = {
        baseInfo: {
            suiYun: `${suiYun.wuxing}运 ${suiYun.taiGuoBuJi}`,
            yearGan,
            yearZhi,
            taiGuoBuJi: suiYun.taiGuoBuJi
        },
        shiYu: [],    // 实郁：太过欺负不及（对应我们的主郁/明郁）
        fanShaYu: [], // 反杀郁：不及反杀太过
        youDian: [],  // 诱点：触发因素+发作时间
        chuanDaoPath: [], // 新增：病理传导路径
        tiaoHeFangAn: [] // 调和方案
    }

    // ------------------------------
    // 2. 计算实郁（主郁/明郁）：太过克不及
    // ------------------------------
    zhuYun.forEach(yun => {
        if (yun.taishao === '太') {
            const keWuxing = WUXING_SHENGKE.ke[yun.wuxing]
            const beikeYun = zhuYun.find(y => y.wuxing === keWuxing && y.taishao === '少')
            
            if (beikeYun) {
                // 找本盘中对应的郁点地支
                let yuDianZhi = ''
                for (let zhi of zhiList) {
                    if (DIZHI_MAP[zhi].wuxing === keWuxing) {
                        yuDianZhi = zhi
                        break
                    }
                }
                // 没有则找同气第一个
                if (!yuDianZhi) {
                    yuDianZhi = Object.keys(DIZHI_MAP).find(zhi => DIZHI_MAP[zhi].wuxing === keWuxing)
                }

                const guanlian = YUDIAN_GUANLIAN[yuDianZhi] || {
                    core: '未知',
                    channels: [],
                    pangYu: '',
                    cangKu: '未知'
                }

                result.shiYu.push({
                    gongJiFang: `${yun.wuxing}运太过`,
                    beiGongJi: `${beikeYun.wuxing}运不及`,
                    yuDianMingCheng: `${yun.wuxing}克${beikeYun.wuxing}实郁`,
                    yuDianZhi: yuDianZhi,
                    coreOrgan: guanlian.core,
                    chengDu: '★★★★★',
                    shuoMing: `${yun.wuxing}气太旺，压制${beikeYun.wuxing}气，导致${beikeYun.wuxing}气被郁住，发不出来。核心短板在${guanlian.core}脏。`
                })

                // 生成病理传导路径
                if (guanlian.channels.length > 0) {
                    result.chuanDaoPath.push(`【${yuDianZhi}郁传导路径】`)
                    result.chuanDaoPath.push(`1. 核心薄弱：${guanlian.core}脏功能先天不足，最易首先出现失调`)
                    result.chuanDaoPath.push(`2. 本经受累：${guanlian.channels[0]}本经气机不畅`)
                    if (guanlian.channels.length >= 2) {
                        result.chuanDaoPath.push(`3. 同气联动：${guanlian.channels[1]}随之受累`)
                    }
                    if (guanlian.channels.length >= 3) {
                        result.chuanDaoPath.push(`4. 传导链：${guanlian.channels.slice(2).join('、')}后期易出现问题`)
                    }
                    if (guanlian.cangKu) {
                        result.chuanDaoPath.push(`5. 藏库伏邪：${yuDianZhi}为${guanlian.cangKu}，所藏之气伏留体内`)
                    }
                }

                // 旁郁（暗郁）预警
                if (guanlian.pangYu) {
                    result.chuanDaoPath.push(`\n【旁郁预警】${guanlian.pangYu}与${yuDianZhi}同气，主郁日久必累及，30岁后或逢${guanlian.pangYu}年/月/日时触发`)
                }
            }
        }
    })

    // ------------------------------
    // 3. 计算反杀郁：不及反克太过
    // ------------------------------
    zhuYun.forEach(yun => {
        if (yun.taishao === '少') {
            const fanKeWuxing = Object.keys(WUXING_SHENGKE.ke).find(key => WUXING_SHENGKE.ke[key] === yun.wuxing)
            const fankeYun = zhuYun.find(y => y.wuxing === fanKeWuxing && y.taishao === '太')
            
            if (fankeYun) {
                result.fanShaYu.push({
                    gongJiFang: `${yun.wuxing}运不及`,
                    beiGongJi: `${fankeYun.wuxing}运太过`,
                    yuDianMingCheng: `${yun.wuxing}反杀${fankeYun.wuxing}郁`,
                    chengDu: '★★★★',
                    shuoMing: `${yun.wuxing}气被压到极致，物极必反，反过来冲击${fankeYun.wuxing}气，导致剧烈矛盾`
                })
            }
        }
    })

    // ------------------------------
    // 4. 计算诱点（触发因素+发作时间）
    // ------------------------------
    const dizhiMonth = {
        '木': ['寅月', '卯月'],
        '火': ['巳月', '午月'],
        '土': ['辰月', '未月', '戌月', '丑月'],
        '金': ['申月', '酉月'],
        '水': ['亥月', '子月']
    }

    result.shiYu.forEach(yu => {
        // 诱点1：被克五行当令之时（同气触发）
        result.youDian.push({
            yuDian: yu.yuDianMingCheng,
            leiXing: '同气诱点',
            faZuoShiJian: dizhiMonth[yu.beiGongJi.split('运')[0]],
            shuoMing: '以上月份为郁气得助、矛盾激化高发期'
        })

        // 诱点2：攻击五行当令之时（加重压制）
        result.youDian.push({
            yuDian: yu.yuDianMingCheng,
            leiXing: '加重诱点',
            faZuoShiJian: dizhiMonth[yu.gongJiFang.split('运')[0]],
            shuoMing: '以上月份为攻击气最旺，郁点被压制最严重时期'
        })
    })

    // ------------------------------
    // 5. 自动生成调和方案（保留原有框架，优化内容）
    // ------------------------------
    result.shiYu.forEach(yu => {
        const guanlian = YUDIAN_GUANLIAN[yu.yuDianZhi] || { core: '对应脏腑' }
        
        result.tiaoHeFangAn.push({
            yuDian: yu.yuDianMingCheng,
            yuanZe: '太过用不及和，开抽风机收敛',
            zhenFaJianYi: `扎阳明经，阖法，收敛${yu.gongJiFang.split('运')[0]}气；同时疏通${guanlian.core}经气机`,
            tiaoLiJianYi: `忌辛辣生发，多吃收敛润燥食物，重点在${result.youDian[0]?.faZuoShiJian?.[0] || '对应月份'}提前调理`,
            zhuYi: '以上仅为先天倾向，并非必然发病，提前干预可有效降低风险'
        })
    })

    result.fanShaYu.forEach(yu => {
        result.tiaoHeFangAn.push({
            yuDian: yu.yuDianMingCheng,
            yuanZe: '不及用太过去和，开放风机发散',
            zhenFaJianYi: `扎太阳经，开法，升发${yu.gongJiFang.split('运')[0]}气`,
            tiaoLiJianYi: '适当温补，多吃升发疏通气机食物，避免过度劳累'
        })
    })

    return result
}