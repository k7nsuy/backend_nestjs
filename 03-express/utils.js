export function getToday() {
    const createdAt = new Date()
    const getYear = createdAt.getFullYear()
    const getMonth = createdAt.getMonth() + 1
    const getDate = createdAt.getDate()
    const today = `${getYear}-${getMonth}-${getDate}`
    return today
}

