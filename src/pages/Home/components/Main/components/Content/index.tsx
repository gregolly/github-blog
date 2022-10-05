import { useEffect, useState } from 'react'

import axios from 'axios'
// import { CardIssue } from './components/CardIssue'
import { InputSearch } from './components/InputSearch'
import { ContentContainer } from './styles'

export function Content() {
  const [issues, setIssuesData] = useState<Record<string, any>[]>([])

  useEffect(() => {
    getIssuesFromGithubApi()
  }, [])

  async function getIssuesFromGithubApi() {
    const response = await axios.get(
      'https://api.github.com/search/issues?q=lorem%20repo:gregolly/github-blog',
    )

    const apiData = response.data.items
    setIssuesData(apiData)
  }

  console.log(issues)

  return (
    <ContentContainer>
      <InputSearch issues={issues} />
      {/* <CardIssue publishes={issues} /> */}
    </ContentContainer>
  )
}
