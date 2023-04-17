import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `Powered by OpenAI 
- 如果本项目对你有所帮助，可以给小猫 [买点零食](https://img.qzone.work:8443/2023/04/17/b39d7626b24fa.jpg)，我的QQ:2253018152。
- 本网站仅作为项目演示，不提供服务，请点击输入框左侧设置图标填入自己的 OpenAI Key（SK）。[购买自己的chatGPT独享账号,带SK](https://ka.chatgpt12345.xyz)。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
