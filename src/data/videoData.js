const base = '/media/video/'

function header(slug, position = 'center', mobilePosition = position) {
  return {
    src: `${base}${slug}-loop.mp4`,
    poster: `${base}${slug}.webp`,
    mobilePoster: `${base}${slug}-mobile.webp`,
    position,
    mobilePosition,
  }
}

export const heroVideos = {
  home: header('mountain-lake-sunset-aerial', '40% 42%', '42% center'),
  central: header('river-bend-sunset-aerial', 'center 40%', '48% center'),
  bend: header('autumn-river-park-bridge-aerial', 'center 48%', '56% center'),
  secondHomes: header('river-sunset-reflections-aerial', 'center 46%', '45% center'),
}

function feature(slug, title, description) {
  return {
    src: `${base}${slug}.mp4`,
    mobileSrc: `${base}${slug}-720p.mp4`,
    poster: `${base}${slug}.webp`,
    mobilePoster: `${base}${slug}-mobile.webp`,
    title,
    description,
  }
}

export const featureVideos = {
  mountain: feature('alpine-lake-snowy-peaks-water-level', 'A mountain escape',
    'A quiet flight across blue lake water toward snow-covered Cascade peaks, between evergreen shores. Silent film.'),
  bend: feature('summer-riverside-neighborhood-aerial', 'Summer on the river',
    'An aerial view of a riverfront park, leafy neighborhoods and surrounding hills in Bend. Silent film.'),
}
