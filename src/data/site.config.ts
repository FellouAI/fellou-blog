interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://fellou.ai', // Write here your website url
	author: 'Fellou', // Site author
	title: 'Fellou Blog - The next generation AI Browser', // Site title.
	description:
		'Everything you need to know about AI browser, agent programming framework, a totaly new Agent OS. Company updates &amp; Technology Trends.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
