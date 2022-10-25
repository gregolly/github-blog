import { useEffect, useState, useCallback } from 'react'
import terminal from '../../../../../../../../../../assets/terminal.svg'
import leftEffect from '../../../../../../../../../../assets/left-effect.svg'
import rightEffect from '../../../../../../../../../../assets/right-effect.svg'
import github from '../../../../../../../../../../assets/github.svg'
import calendar from '../../../../../../../../../../assets/calendar.svg'
import dialog from '../../../../../../../../../../assets/dialog.svg'

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
    <div>
      <ContainerInnerContent>
        <HeaderContentInner>
          <div className="logo">
            <img src={terminal} alt="" />
            <span>Github blog</span>
          </div>
          <img className="left-effect" src={leftEffect} alt="" />
          <img className="right-effect" src={rightEffect} alt="" />
          <InfoContent>
            <div className="links">
              <NavLink to="/">Voltar</NavLink>
              <NavLink to={content?.html_url || ''}>Ver no github</NavLink>
            </div>
            <h2>{content?.title}</h2>
            <ul className="list-info">
              <li>
                <img src={github} alt="" />
                {content?.author_association}
              </li>
              <li>
                <img src={calendar} alt="" />
                {content?.created_at}
              </li>
              <li>
                <img src={dialog} alt="" />
                {content?.comments} comentários
              </li>
            </ul>
          </InfoContent>
        </HeaderContentInner>
      </ContainerInnerContent>
      <BodyContentContainer>
        <p>{content?.body}</p>
      </BodyContentContainer>
    </div>
  )
}
