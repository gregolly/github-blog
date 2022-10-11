import { useEffect, useState } from 'react'

import axios from 'axios'
import { CardIssue } from './components/CardIssue'
import { InputSearch } from './components/InputSearch'
import { ContentContainer } from './styles'

export function Content() {
  const [issues, setIssuesData] = useState([])

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

  return (
    <ContentContainer>
      <InputSearch issues={issues} />
      <CardIssue issues={issues} />
    </ContentContainer>
  )
}
