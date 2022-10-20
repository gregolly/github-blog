import { useEffect, useState } from 'react'

import axios from 'axios'
import { CardIssue } from './components/CardIssue'
import { InputSearch } from './components/InputSearch'
import { ContentContainer } from './styles'

import { PropsIssues } from '../../../../../../global'

export function Content() {
  const [issues, setIssuesData] = useState<PropsIssues[]>([])
  const [filteredIssues, setFilteredIssues] = useState<PropsIssues[]>([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    getIssuesFromGithubApi()
  }, [])

  useEffect(() => {
    const filtered = issues.filter((issue) =>
      (issue.title + issue.body).includes(searchInput),
    )

    setFilteredIssues(filtered)
  }, [searchInput, issues])

  async function getIssuesFromGithubApi() {
    const response = await axios.get(
      'https://api.github.com/search/issues?q=lorem%20repo:gregolly/github-blog',
    )

    const apiData = response.data.items
    setIssuesData(apiData)
  }

  return (
    <ContentContainer>
      <InputSearch issues={issues} setSearchInput={setSearchInput} />
      <CardIssue issues={filteredIssues} />
    </ContentContainer>
  )
}
