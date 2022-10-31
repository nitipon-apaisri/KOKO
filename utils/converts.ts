export const prettyBalance = (balance:string, decimals: number, len: number) => {
	if (!balance) {
		return '0'
	}
	const diff = balance.length - decimals
	const fixedPoint = Math.max(2, len - Math.max(diff, 0))
	const fixedBalance = (Number(balance) / 10 ** decimals).toFixed(fixedPoint)
	const finalBalance = parseFloat(fixedBalance).toString()
	const [head, tail] = finalBalance.split('.')
	if (Number(head) === 0) {
		if (tail) {
			return `${head}.${tail.substring(0, len - 1)}`
		}
		return `${head}`
	}
	const formattedHead = head.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	return tail ? `${formattedHead}.${tail}` : formattedHead
}