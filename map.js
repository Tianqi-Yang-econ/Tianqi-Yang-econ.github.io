// Cities I have lived in or visited.
// Edit this list to update the map; commit and push to deploy.
//
// type:    current | long_term | medium | short
// tier:    1 = always shown
//          2 = shown after one zoom-in
// dir:     tooltip direction; default "right"; per-city override to avoid overlap

const CITIES = [
  // tier 1 — primary
  { en: "Milan",     zh: "米兰",  lon:    9.19, lat: 45.46, type: "long_term", tier: 1, dir: "right" },
  { en: "Zhenjiang", zh: "镇江",  lon:  119.45, lat: 32.20, type: "current",   tier: 1, dir: "right" },
  { en: "Wuhan",     zh: "武汉",  lon:  114.30, lat: 30.59, type: "long_term", tier: 1, dir: "bottom" },

  // tier 2
  { en: "Zhengzhou", zh: "郑州",  lon:  113.62, lat: 34.75, type: "short", tier: 2, dir: "top" },
  { en: "Shanghai",  zh: "上海",  lon:  121.47, lat: 31.23, type: "short", tier: 2, dir: "right" },

  // tier 2 — short visits
  { en: "Qingdao",     zh: "青岛",   lon: 120.38, lat: 36.07, type: "short", tier: 2 },
  { en: "Yantai",      zh: "烟台",   lon: 121.45, lat: 37.46, type: "short", tier: 2 },
  { en: "Jinan",       zh: "济南",   lon: 117.13, lat: 36.65, type: "short", tier: 2 },
  { en: "Shaoxing",    zh: "绍兴",   lon: 120.58, lat: 30.00, type: "short", tier: 2, dir: "bottom" },
  { en: "Hangzhou",    zh: "杭州",   lon: 120.15, lat: 30.27, type: "short", tier: 2, dir: "top" },
  { en: "Fuzhou",      zh: "福州",   lon: 119.30, lat: 26.07, type: "short", tier: 2 },
  { en: "Xiamen",      zh: "厦门",   lon: 118.09, lat: 24.48, type: "short", tier: 2 },
  { en: "Guangzhou",   zh: "广州",   lon: 113.26, lat: 23.13, type: "short", tier: 2 },
  { en: "Changsha",    zh: "长沙",   lon: 112.93, lat: 28.23, type: "short", tier: 2 },
  { en: "Chengdu",     zh: "成都",   lon: 104.07, lat: 30.66, type: "short", tier: 2 },
  { en: "Guang'an",    zh: "广安",   lon: 106.63, lat: 30.46, type: "short", tier: 2, dir: "bottom" },
  { en: "Xiangyang",   zh: "襄阳",   lon: 112.12, lat: 32.01, type: "short", tier: 2, dir: "top" },
  { en: "Yichang",     zh: "宜昌",   lon: 111.29, lat: 30.69, type: "short", tier: 2, dir: "left" },
  { en: "Jingzhou",    zh: "荆州",   lon: 112.24, lat: 30.34, type: "short", tier: 2, dir: "bottom" },
  { en: "Liyang",      zh: "溧阳",   lon: 119.48, lat: 31.42, type: "short", tier: 2, dir: "bottom" },
  { en: "Changzhou",   zh: "常州",   lon: 119.97, lat: 31.81, type: "short", tier: 2, dir: "right" },
  { en: "Quanzhou",    zh: "泉州",   lon: 118.68, lat: 24.87, type: "short", tier: 2 },
  { en: "Jiangyou",    zh: "江油",   lon: 104.74, lat: 31.78, type: "short", tier: 2, dir: "top" },
  { en: "Chongqing",   zh: "重庆",   lon: 106.55, lat: 29.56, type: "short", tier: 2 },
  { en: "Kaili",       zh: "凯里",   lon: 107.98, lat: 26.57, type: "short", tier: 2 },
  { en: "Guiyang",     zh: "贵阳",   lon: 106.63, lat: 26.65, type: "short", tier: 2, dir: "left" },
  { en: "Tongren",     zh: "铜仁",   lon: 109.19, lat: 27.72, type: "short", tier: 2, dir: "top" },
  { en: "Jiangkou",    zh: "江口",   lon: 108.85, lat: 27.70, type: "short", tier: 2, dir: "left" },
  { en: "Fenghuang",   zh: "凤凰",   lon: 109.60, lat: 27.95, type: "short", tier: 2, dir: "right" },
  { en: "Yangzhou",    zh: "扬州",   lon: 119.42, lat: 32.39, type: "short", tier: 2, dir: "top" },
  { en: "Wufeng",      zh: "五峰",   lon: 110.67, lat: 30.20, type: "short", tier: 2, dir: "bottom" },
  { en: "Harbin",      zh: "哈尔滨", lon: 126.53, lat: 45.80, type: "short", tier: 2 },
  { en: "Baishan",     zh: "白山",   lon: 126.42, lat: 41.94, type: "short", tier: 2 },
  { en: "Yanji",       zh: "延吉",   lon: 129.51, lat: 42.91, type: "short", tier: 2 },
  { en: "Jilin",       zh: "吉林市", lon: 126.55, lat: 43.84, type: "short", tier: 2, dir: "left" },
  { en: "Beijing",     zh: "北京",   lon: 116.41, lat: 39.90, type: "short", tier: 2 },
  { en: "Nanjing",     zh: "南京",   lon: 118.79, lat: 32.06, type: "short", tier: 2, dir: "left" },
  { en: "Yangzhong",   zh: "扬中",   lon: 119.83, lat: 32.24, type: "short", tier: 2, dir: "right" },
  { en: "Jurong",      zh: "句容",   lon: 119.16, lat: 31.95, type: "short", tier: 2, dir: "bottom" },
  { en: "Wuxi",        zh: "无锡",   lon: 120.31, lat: 31.49, type: "short", tier: 2, dir: "right" },
  { en: "Suzhou",      zh: "苏州",   lon: 120.59, lat: 31.30, type: "short", tier: 2, dir: "bottom" },
  { en: "Lushan",      zh: "庐山",   lon: 115.99, lat: 29.55, type: "short", tier: 2 },
  { en: "Xi'an",       zh: "西安",   lon: 108.93, lat: 34.34, type: "short", tier: 2 },
  { en: "Luoyang",     zh: "洛阳",   lon: 112.45, lat: 34.62, type: "short", tier: 2, dir: "bottom" },
  { en: "Jiaozuo",     zh: "焦作",   lon: 113.24, lat: 35.21, type: "short", tier: 2, dir: "top" },
  { en: "Dalian",      zh: "大连",   lon: 121.61, lat: 38.91, type: "short", tier: 2 },
  { en: "Leshan",      zh: "乐山",   lon: 103.76, lat: 29.55, type: "short", tier: 2, dir: "left" },
  { en: "Dali",        zh: "大理",   lon: 100.16, lat: 25.69, type: "short", tier: 2 },
  { en: "Kunming",     zh: "昆明",   lon: 102.72, lat: 25.04, type: "short", tier: 2, dir: "bottom" },
  { en: "Jiuzhaigou",  zh: "九寨沟", lon: 103.92, lat: 33.26, type: "short", tier: 2 },
  { en: "Lisbon",      zh: "里斯本",       lon:  -9.14, lat: 38.72, type: "short", tier: 2, dir: "left" },
  { en: "Sintra",      zh: "辛特拉",       lon:  -9.39, lat: 38.80, type: "short", tier: 2, dir: "left" },
  { en: "Barcelona",   zh: "巴塞罗那",     lon:   2.16, lat: 41.39, type: "short", tier: 2 },
  { en: "Toledo",      zh: "托莱多",       lon:  -4.02, lat: 39.86, type: "short", tier: 2, dir: "bottom" },
  { en: "Madrid",      zh: "马德里",       lon:  -3.70, lat: 40.42, type: "short", tier: 2 },
  { en: "Venice",      zh: "威尼斯",       lon:  12.32, lat: 45.44, type: "short", tier: 2, dir: "top" },
  { en: "Rome",        zh: "罗马",         lon:  12.50, lat: 41.90, type: "short", tier: 2 },
  { en: "Paris",       zh: "巴黎",         lon:   2.35, lat: 48.86, type: "short", tier: 2, dir: "top" },
  { en: "Strasbourg",  zh: "斯特拉斯堡",   lon:   7.75, lat: 48.58, type: "short", tier: 2 },
  { en: "Vienna",      zh: "维也纳",       lon:  16.37, lat: 48.21, type: "short", tier: 2 },
  { en: "Prague",      zh: "布拉格",       lon:  14.44, lat: 50.08, type: "short", tier: 2, dir: "top" },
  { en: "Isola Bella", zh: "贝拉岛",       lon:   8.53, lat: 45.90, type: "short", tier: 2, dir: "left" },
  { en: "Turin",       zh: "都灵",         lon:   7.69, lat: 45.07, type: "short", tier: 2, dir: "left" },
  { en: "Genoa",       zh: "热那亚",       lon:   8.95, lat: 44.41, type: "short", tier: 2, dir: "bottom" },
  { en: "Florence",    zh: "佛罗伦萨",     lon:  11.26, lat: 43.77, type: "short", tier: 2, dir: "left" },
  { en: "Bologna",     zh: "博洛尼亚",     lon:  11.34, lat: 44.49, type: "short", tier: 2, dir: "right" },
];

// ----------------------------------------------------------------------------

const ACCENT = "#b94a48";
const GRAY = "#666666";
const LIGHT_GRAY = "#9a9a9a";

const STYLE = {
  current:   { radius: 5.5, color: ACCENT, fillColor: ACCENT, fillOpacity: 1.0, weight: 1 },
  long_term: { radius: 4,   color: GRAY,   fillColor: GRAY,   fillOpacity: 1.0, weight: 0 },
  medium:    { radius: 3,   color: LIGHT_GRAY, fillOpacity: 0, weight: 1 },
  short:     { radius: 2.4, color: LIGHT_GRAY, fillOpacity: 0, weight: 0.9 },
};

const map = L.map("map", {
  center:             [37, 60],
  zoom:               3,
  minZoom:            3,
  maxZoom:            7,
  zoomSnap:           0.5,
  zoomDelta:          0.5,
  wheelPxPerZoomLevel: 100,
  zoomControl:        false,
  attributionControl: false,
  scrollWheelZoom:    true,
  doubleClickZoom:    true,
  worldCopyJump:      false,
  maxBounds:          [[-10, -45], [82, 195]],
});

// country fill (admin-0) — very faint
L.geoJSON(WORLD_GEOJSON, {
  style: {
    fillColor:   "#f4f4f4",
    fillOpacity: 1,
    color:       "#888888",
    weight:      0.5,
    opacity:     0.22,
  },
  interactive: false,
}).addTo(map);

// admin-1 (provinces) — hidden at low zoom, fades in
const provinceLayer = L.geoJSON(PROVINCES_GEOJSON, {
  style: {
    fill:    false,
    color:   "#888888",
    weight:  0.4,
    opacity: 0,
  },
  interactive: false,
}).addTo(map);

function updateProvinceVisibility() {
  const z = map.getZoom();
  // fade in starting zoom 4, capped at 0.25 (much fainter than country borders' 0.22)
  const op = z < 4 ? 0 : z < 4.5 ? 0.12 : 0.22;
  provinceLayer.setStyle({ opacity: op });
}

function directionOffset(dir) {
  switch (dir) {
    case "right":  return [ 6,  0];
    case "left":   return [-6,  0];
    case "top":    return [ 0, -6];
    case "bottom": return [ 0,  6];
    default:       return [ 6,  0];
  }
}

function currentZoomTier() {
  return map.getZoom() < 4 ? 1 : 2;
}

function labelSize(c) {
  const fontSize = c.tier === 1 ? 13 : 11.5;
  return {
    width:  Math.max(24, c.en.length * fontSize * 0.56 + 4),
    height: fontSize + 4,
  };
}

function labelBox(c, dir) {
  const point = map.latLngToLayerPoint([c.lat, c.lon]);
  const size = labelSize(c);
  const gap = 8;
  let left;
  let top;

  switch (dir) {
    case "left":
      left = point.x - gap - size.width;
      top = point.y - size.height / 2;
      break;
    case "top":
      left = point.x - size.width / 2;
      top = point.y - gap - size.height;
      break;
    case "bottom":
      left = point.x - size.width / 2;
      top = point.y + gap;
      break;
    case "right":
    default:
      left = point.x + gap;
      top = point.y - size.height / 2;
      break;
  }

  return {
    left,
    top,
    right: left + size.width,
    bottom: top + size.height,
  };
}

function overlapArea(a, b, pad = 4) {
  const left = Math.max(a.left - pad, b.left - pad);
  const right = Math.min(a.right + pad, b.right + pad);
  const top = Math.max(a.top - pad, b.top - pad);
  const bottom = Math.min(a.bottom + pad, b.bottom + pad);
  return Math.max(0, right - left) * Math.max(0, bottom - top);
}

function edgePenalty(box) {
  const size = map.getSize();
  let penalty = 0;
  if (box.left < 0) penalty += -box.left;
  if (box.top < 0) penalty += -box.top;
  if (box.right > size.x) penalty += box.right - size.x;
  if (box.bottom > size.y) penalty += box.bottom - size.y;
  return penalty * 50;
}

function candidateDirections(preferred) {
  return [preferred || "right", "right", "left", "top", "bottom"]
    .filter((dir, index, dirs) => dirs.indexOf(dir) === index);
}

function chooseLabelDirection(c, placed) {
  let best = null;

  candidateDirections(c.dir).forEach((dir) => {
    const box = labelBox(c, dir);
    const collision = placed.reduce((sum, placedBox) => sum + overlapArea(box, placedBox), 0);
    const score = collision + edgePenalty(box);

    if (!best || score < best.score) {
      best = { dir, box, score };
    }
  });

  return best;
}

function setTooltipDirection(item, dir) {
  const tooltip = item.marker.getTooltip();
  tooltip.options.direction = dir;
  tooltip.options.offset = L.point(directionOffset(dir));
  tooltip.update();
}

function applyLabelLayout() {
  const showTier = currentZoomTier();
  const placed = [];

  CITY_LAYERS
    .filter((item) => item.city.tier <= showTier)
    .sort((a, b) => a.city.tier - b.city.tier)
    .forEach((item) => {
      const choice = chooseLabelDirection(item.city, placed);
      setTooltipDirection(item, choice.dir);
      placed.push(choice.box);
    });
}

// City markers + labels. Lower tiers are drawn first so tier 1 stays on top.
const CITY_LAYERS = [];

[...CITIES].sort((a, b) => b.tier - a.tier).forEach((c) => {
  const opts = STYLE[c.type] || STYLE.short;
  const dir  = c.dir || "right";

  // halo for current city
  if (c.type === "current") {
    L.circleMarker([c.lat, c.lon], {
      radius:      10,
      color:       ACCENT,
      fillOpacity: 0,
      opacity:     0.28,
      weight:      1,
      interactive: false,
    }).addTo(map);
  }

  const marker = L.circleMarker([c.lat, c.lon], opts).addTo(map);
  marker.bindTooltip(c.en, {
    permanent: true,
    direction: dir,
    offset:    directionOffset(dir),
    className: `city-label tier-${c.tier} type-${c.type}`,
  });
  CITY_LAYERS.push({ city: c, marker });

  if (c.type === "current") {
    L.circleMarker([c.lat, c.lon], {
      radius:      2.2,
      color:       "#ffffff",
      fillColor:   "#ffffff",
      fillOpacity: 1,
      opacity:     1,
      weight:      0,
      interactive: false,
    }).addTo(map);
  }
});

// progressive label visibility by zoom
function applyZoomTier() {
  const showTier = currentZoomTier();
  const root = document.documentElement;
  root.classList.remove("zoom-tier-1", "zoom-tier-2");
  root.classList.add(`zoom-tier-${showTier}`);
}

map.on("zoomend moveend resize", () => {
  applyZoomTier();
  updateProvinceVisibility();
  applyLabelLayout();
});
applyZoomTier();
updateProvinceVisibility();
applyLabelLayout();
