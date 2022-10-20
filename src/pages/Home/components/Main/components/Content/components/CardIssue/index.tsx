import { CardContainer, CardWrapper } from './styles'
import { NavLink } from 'react-router-dom'
import { IssuesProps } from '../../../../../../../../global'

export function CardIssue({ issues }: IssuesProps) {
  return (
    <CardContainer>
      {issues.map((publish) => (
        <CardWrapper key={publish.number}>
          <NavLink to={`/content/${publish.number}`}>
            <div className="wrapper">
              <h2>{publish.title.slice(0, 50)}</h2>
              <span>{publish.created_at}</span>
            </div>
            <p>{publish.body.slice(0, 100)}</p>
          </NavLink>
        </CardWrapper>
      ))}
    </CardContainer>
  )
}
