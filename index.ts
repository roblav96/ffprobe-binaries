import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'

let platform = os.platform()
let arch = os.arch()

let ffpath = path.join(__dirname, 'bin', platform, arch, 'ffprobe')
if (platform == 'win32') {
	ffpath += '.exe'
}

if (fs.existsSync(ffpath)) {
	console.error(`Unsupported os -> '${platform}' '${arch}'`)
	process.exit(1)
}

export = ffpath
