enum Rating {
  Onvoldoende,
  Matig,
  Voldoende,
  RuimVoldoende,
  Goed,
  ZeerGoed,
}

export default Rating;

export function ratingFromPointsAndLevel(
  points: number,
  level: number
): Rating {
  if (points <= 9) {
    return Rating.Onvoldoende;
  }
  if (points <= 13) {
    return Rating.Matig;
  }
  if (points <= 17) {
    return Rating.Voldoende;
  }
  if (points <= 22) {
    return Rating.RuimVoldoende;
  }
  if (points <= 32) {
    return Rating.Goed;
  }
  return Rating.ZeerGoed;
}
