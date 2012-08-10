import {useFluent} from 'fluent-vue'

export function formatRelativeTime(date: Date | string): string {
    const {$t} = useFluent()
    const targetDate = typeof date === 'string' ? new Date(date) : date
    const now = new Date()
    const diffInHours = (now.getTime() - targetDate.getTime()) / (1000 * 60 * 60)
    const diffInDays = diffInHours / 24
    const diffInYears = diffInDays / 365

    if (diffInHours < 24) {
        return $t('time-today', {
            hours: Math.floor(diffInHours),
            minutes: Math.floor((diffInHours % 1) * 60)
        })
    } else if (diffInYears < 1) {
        return $t('time-this-year', {
            month: targetDate.getMonth() + 1,
            day: targetDate.getDate()
        })
    } else {
        return $t('time-years-ago', {
            year: targetDate.getFullYear(),
            month: targetDate.getMonth() + 1,
            day: targetDate.getDate()
        })
    }
}