/* eslint-disable @next/next/no-html-link-for-pages */
interface PreviewBannerProps {
	loading?: boolean
  }
  
  export function PreviewBanner({ loading }: PreviewBannerProps) {
	return (
	  <div>
		{loading ? 'Loading...' : 'Previewing draft content.'}{' '}
		<a
		  href="/api/exit-preview"
		>
		  Exit preview mode
		</a>
	  </div>
	)
  }