import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, "../.env");

export function setupEnvironment() {
  // 尝试加载 .env 文件，但不强制要求
  dotenv.config({ path: envPath });

  // 检查必需的环境变量
  if (!process.env.GOOGLE_API_KEY) {
    throw new Error(
      "GOOGLE_API_KEY environment variable must be set"
    );
  }

  return {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    NODE_ENV: process.env.NODE_ENV || "development",
    BASE_URL: process.env.BASE_URL || "https://generativelanguage.googleapis.com",
    SEARCH1_API_KEY: process.env.SEARCH1_API_KEY,
  };
}
