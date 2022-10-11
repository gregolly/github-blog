import { ContainerSearch } from './styles'

interface ArrayIssues {
  issues: unknown[]
}

export function InputSearch({ issues }: ArrayIssues) {
  return (
    <ContainerSearch>
      <div id="wrapper">
        <span>Publicações</span>
        <span>{issues.length} publicações</span>
      </div>
      <input
        type="text"
        className="input_search"
        placeholder="Buscar conteúdo"
      />
    </ContainerSearch>
  )
}
