export function RenderizarFilmes({ filmesEncontrados }) {

    // filtrar filmes para não haver renderização duplicada nos IDs
    const filmesUnicos = filmesEncontrados.filter(
        (filme, index, self) =>
            index === self.findIndex(filmeVerificado => filmeVerificado.imdbID === filme.imdbID)
    );

    return (
        <div style={styles.containerFilmes}>
            {filmesUnicos.map(filme =>
                <div key={filme.imdbID} style={styles.filmeCard}>
                    <h3>
                        <strong>
                            {filme.Title}
                        </strong>
                    </h3>
                    <p>
                        <strong>
                            {filme.Year}
                        </strong>
                    </p>
                    <img src={filme.Poster} alt={filme.Title} />
                </div>
            )
            }
        </div >
    )
}

const styles = {



}
