/**
 * 生成随机颜色
 * @returns HSL 格式的颜色字符串
 */
export function generateRandomColor() {
    const hue = Math.floor(Math.random() * 360)
    const saturation = 60 + Math.floor(Math.random() * 20) // 60-80%
    const lightness = 45 + Math.floor(Math.random() * 10) // 45-55%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}