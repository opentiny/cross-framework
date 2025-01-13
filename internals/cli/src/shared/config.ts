
const EXTENERAL = [
  'vue'
]
const external = (deps) => {
  return EXTENERAL.includes(deps) || /^@opentiny[\\/]|@originjs|echarts|cropperjs|@better-scroll/.test(deps)
}

export { external }
