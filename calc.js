function howMany(pig) {
  count =0
  r = 0
  for(i=1;i<=pig;i++) {
    if ( i % 12 == 0) {
      count++
    }
    r = pig - (12 * count)
    r += count
  }
  if (count + r > 11) {
    pig = count + r
    r = 0
    for(i = 1; i <= pig; i++) {
      if ( i % 12 == 0) {
        count++
        r++
      }
    }
    r += pig % 12
  }
  console.log('you can evolve ' + count + ' piggies and have ' + r + ' candies remaining')
}
howMany(12)
howMany(13)
howMany(24)
howMany(50)
howMany(72)
howMany(73)
howMany(144)


















