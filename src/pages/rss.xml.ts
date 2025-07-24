import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { siteConfig } from '@/site-config'

export async function GET(context: any) {
	const posts = await getCollection('blog')

	// Sort posts by publication date (newest first)
	const sortedPosts = posts.sort((a, b) => {
		return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
	})

	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: context.site,
		items: sortedPosts.map((post) => ({
			...post.data,
			link: `blog/${post.slug}/`
		}))
	})
}
