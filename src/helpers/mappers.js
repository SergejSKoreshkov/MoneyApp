export function mapHistoryToCategories (
  history = [],
  categories = {},
  { limit, sort = 'asc' }
) {
  const filteredCategories = []
  return history
    .filter(el => el.type !== 'transfer')
    .sort(sort === 'asc'
      ? (a, b) => categories[a.category].total - categories[b.category].total
      : (a, b) => categories[b.category].total - categories[a.category].total
    )
    .filter(el => {
      const isCategoryIncluded = filteredCategories.includes(el.category)
      filteredCategories.push(el.category)
      return !isCategoryIncluded
    })
    .map(el => {
      return {
        ...categories[el.category],
        name: el.category,
        last: history
          .sort((a, b) => b.time - a.time)
          .find(transaction =>
            transaction.category === el.category
          )
          .total
      }
    })
    .filter((_, index) => limit ? index < limit : true)
}
