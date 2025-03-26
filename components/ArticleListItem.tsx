import Link from "next/link"

import type { ArticleItem } from "../types"
import { CardHeader } from "./CardHeader"

interface Props {
  category: string
  articles: ArticleItem[]
}

const ArticleItemList = ({ category, articles }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <CardHeader title={category} className="" />
      <div className="flex flex-col gap-2.5 font-poppins text-lg">
        {articles.map((article, id) => (
          <Link
            href={`/${article.id}`}
            key={id}
            className="text-white hover:underline transition duration-150"
          >
            {article.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ArticleItemList
