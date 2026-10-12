import Image, { type ImageProps } from 'next/image'
import { type MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    // `alt` is already part of `ImageProps`
    // eslint-disable-next-line jsx-a11y/alt-text
    Image: (props: ImageProps) => <Image {...props} />,
    // Long code lines scroll horizontally; make that reachable by keyboard.
    pre: (props: React.ComponentPropsWithoutRef<'pre'>) => (
      <pre tabIndex={0} {...props} />
    ),
  }
}
