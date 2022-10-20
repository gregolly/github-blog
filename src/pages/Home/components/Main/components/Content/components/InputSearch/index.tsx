import { ContainerSearch } from './styles'

interface PropsArrayIssues {
  issues: unknown[]
  setSearchInput: (param: string) => void
}

export function InputSearch({ issues, setSearchInput }: PropsArrayIssues) {
  // eslint-disable-next-line no-undef
  function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value)
  }

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
        onChange={handleSearchInput}
      />
    </ContainerSearch>
  )
}
