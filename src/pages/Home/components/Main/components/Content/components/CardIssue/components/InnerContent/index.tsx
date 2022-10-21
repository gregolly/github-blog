import { useEffect, useState, useCallback } from 'react'
import {
  BodyContentContainer,
  ContainerInnerContent,
  HeaderContentInner,
  InfoContent,
} from './styles'

import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'

interface PropsInnerContent {
  html_url: string
  title: string
  author_association: string
  created_at: string
  comments: string
  body: string
}

export function InnerContent() {
  const { issuesid } = useParams()
  const [content, setContent] = useState<PropsInnerContent>()

  const getIssuesByID = useCallback(async () => {
    const response = await axios.get<PropsInnerContent>(
      `https://api.github.com/repos/gregolly/github-blog/issues/${issuesid}`,
    )

    const issuesForID = response.data

    setContent(issuesForID)
  }, [issuesid])

  useEffect(() => {
    getIssuesByID()
  }, [getIssuesByID])

  return (
    <ContainerInnerContent>
      <HeaderContentInner>
        <InfoContent>
          <NavLink to="/">Voltar</NavLink>
          <NavLink to={content?.html_url || ''}>Ver no github</NavLink>
          <h2>{content?.title}</h2>
          <ul>
            <li>{content?.author_association}</li>
            <li>{content?.created_at}</li>
            <li>{content?.comments} comentários</li>
          </ul>
        </InfoContent>
      </HeaderContentInner>

      <BodyContentContainer>
        <p>{content?.body}</p>
      </BodyContentContainer>
    </ContainerInnerContent>
  )
}
