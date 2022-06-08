import * as React from 'react'

import { ShareIcon, CopyIcon } from './icons'
import { IShareLink, IShareLinkProps } from './types'

export const shareUrl = ({ url, title }: IShareLink) =>
  window.navigator.share({ url, title })
export const copyUrl = (url: string) => navigator.clipboard.writeText(url)

function ShareLink({ title, url, className }: IShareLinkProps) {
  const [canShare, setCanShare] = React.useState(false)
  const handleShareUrl = () =>
    shareUrl({
      title,
      url
    })
  const handleCopyUrl = () => copyUrl(url)

  React.useEffect(() => {
    if (
      typeof window.navigator.canShare !== 'undefined' &&
      window.navigator.canShare({
        title,
        url
      }) === true
    )
      setCanShare(true)
  }, [])

  if (canShare) {
    return (
      <button type="button" className={className} onClick={handleShareUrl}>
        <ShareIcon />
        Share url
      </button>
    )
  }

  return (
    <button type="button" className={className} onClick={handleCopyUrl}>
      <CopyIcon />
      Copy url
    </button>
  )
}
export default ShareLink
