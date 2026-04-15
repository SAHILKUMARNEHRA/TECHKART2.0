export function getReviewCount(productId: number) {
  return 80 + ((productId * 73) % 920)
}

