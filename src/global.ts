export interface PropsIssues {
  number: number
  title: string
  created_at: string
  body: string
}

export interface IssuesProps {
  issues: PropsIssues[]
}
