import { CardContainer, CardWrapper } from './styles'
import { NavLink } from 'react-router-dom'

interface PropsIssues {
  id: number
  title: string
  created_at: string
  body: string
}

interface IssuesProps {
  issues: PropsIssues[]
}

export function CardIssue({ issues }: IssuesProps) {
  return (
    <CardContainer>
      {issues.map((publish) => (
        <CardWrapper key={publish.id}>
          <NavLink to="/content">
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
