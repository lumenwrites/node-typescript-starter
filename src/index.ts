import * as dotenv from 'dotenv'
dotenv.config()
import fs from 'fs-extra'
import { readText } from './utils'
import { zip } from 'zip-a-folder'

const WORKING_DIR = process.cwd()

async function main() {
  const testFile = readText(`${WORKING_DIR}/content/hello.txt`)
  console.log('Contents of the file:', testFile)
  // Take the file from /content/hello.txt and compress it into /output/compressed-file.zip
  fs.ensureDirSync(`${WORKING_DIR}/output`) // ensure output folder exists
  await zip(`${WORKING_DIR}/content`, `${WORKING_DIR}/output/compressed-file.zip`)
}

main()