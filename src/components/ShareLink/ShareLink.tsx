import * as React from 'react'

import { ShareIcon, CopyIcon } from './icons'

export interface IShareLink {
  url: string
  title?: string
}
export interface IShareLinkProps extends IShareLink {
  className: string
}

export const shareUrl = ({ url, title }: IShareLink) =>
  window.navigator.share({ url, title }).then(console.log).catch(console.error)
export const copyUrl = (url: string) =>
  navigator.clipboard.writeText(url).then(console.log).catch(console.error)

const ShareLink = ({ title, url, className }: IShareLinkProps) => {
  const [canShare, setCanShare] = React.useState(false)
  const handleShareUrl = () =>
    shareUrl({
      title,
      url
    })
  const handleCopyUrl = () => copyUrl(url)

  React.useEffect(() => {
    window.navigator.canShare &&
      window.navigator.canShare({
        title,
        url
      }) &&
      setCanShare(true)
  }, [])

  if (canShare) {
    return (
      <button className={className} onClick={handleShareUrl}>
        <ShareIcon />
        Share url
      </button>
    )
  }

  return (
    <button className={className} onClick={handleCopyUrl}>
      <CopyIcon />
      Copy url
    </button>
  )
}
export default ShareLink
