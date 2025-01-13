#!/usr/bin/env node
import { Command, Option } from 'commander'
import { buildReact, buildEntryReact } from './commands/build'

const program = new Command()


program.command('build:entry-react').description('生成 react 组件库入口').action(buildEntryReact)

program
  .command('build:react')
  .description('打包 react 组件库')
  .argument('[names...]', '构建指定组件，如 button alert；不指定则构建全量组件')
  .addOption(new Option('-f --formats <formats...>', '目标格式，默认 ["es"]').choices(['es', 'cjs']))
  .addOption(new Option('-t --build-target <buildTarget>', '组件的目标版本'))
  .option('-s, --scope <scope>', 'npm scope，默认是 opentiny，会以 @opentiny 发布到 npm')
  .option('-c, --clean', '清空构建目录')
  .option('--no-dts', '不生成 dts')
  .action(buildReact)

program.parse()
