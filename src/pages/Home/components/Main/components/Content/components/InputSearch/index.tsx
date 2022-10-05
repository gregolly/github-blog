import { ContainerSearch } from './styles'

export interface IssueProps {
  issues: Record<string, any> // usei esse tipo generico, mas o ideal seria vc mapear os campos do objeto retornado na api do git
}

export function InputSearch(props: IssueProps) {
  return (
    <ContainerSearch>
      <div id="wrapper">
        <span>Publicações</span>
        <span>{props.issues.length} publicações</span>
      </div>
      <input
        type="text"
        className="input_search"
        placeholder="Buscar conteúdo"
      />
    </ContainerSearch>
  )
}
