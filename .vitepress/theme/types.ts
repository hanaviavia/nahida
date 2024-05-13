export type Target = '_blank' | '_self' | '_top';

export interface NavLink {
  /** 站点图标 */
  icon?: string | { svg: string }
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc?: string
  /** 站点链接 */
  link: string
  /** a标签 target */
  target?: Target
}

