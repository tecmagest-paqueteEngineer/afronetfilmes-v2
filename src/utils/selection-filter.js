export default function selectionFilter({series, films} = []) {
    return {
        series: [
        {
            title: 'Documentários', 
            data: series?.filter((item) => item.genre === 'documentaries')
        },
        {
            title: 'Comédia', 
            data: series?.filter((item) => item.genre === 'comedies')
        },
        {
            title: 'Infantil', 
            data: series?.filter((item) => item.genre === 'children')
        },
        {
            title: 'Crime', 
            data: series?.filter((item) => item.genre === 'crime')
        },
        {
            title: 'Feel Good', 
            data: series?.filter((item) => item.genre === 'fell-good')
        },
        ],
        films: [
            {
                title: 'Drama', 
                data: films?.filter((item) => item.genre === 'drama')
            },
            {
                title: 'Ação', 
                data: films?.filter((item) => item.genre === 'thriller')
            },
            {
                title: 'Infantil', 
                data: films?.filter((item) => item.genre === 'children')
            },
            {
                title: 'Suspense', 
                data: films?.filter((item) => item.genre === 'suspense')
            },
            {
                title: 'Romance', 
                data: films?.filter((item) => item.genre === 'romance')
            },
        ],
    };
}