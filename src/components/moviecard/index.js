import React, { useState, useContext, createContext} from 'react';
import {
 Container,
 GroupMovie,
 Title, 
 SubTitle, 
 Description,
 MovieFeature, 
 MovieFeatureTitle,
 MovieFeatureDescription,
 MovieFeatureClose,
 Maturity,
 Content, 
 Entities,
 Meta,
 Item, 
 Image, } from './styles/movieCard';

export const MovieFeatureContext = createContext();

export default function MovieCard({ children, ...restProps}) {
    const [showMovieFeature, setShowMovieFeature] = useState(false);
    const [itemMovieFeature, setItemMovieFeature] = useState({});

    return (
        <MovieFeatureContext.Provider value={{ showMovieFeature, setShowMovieFeature, itemMovieFeature, setItemMovieFeature}}>
            <Container {...restProps}>{children}</Container>
        </MovieFeatureContext.Provider>
    );
}

MovieCard.GroupMovie = function MovieCardGroupMovie({ children, ...restProps}) {
    return <GroupMovie {...restProps}>{children}</GroupMovie>;
};

MovieCard.Title = function MovieCardTitle({ children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>;
};

MovieCard.SubTitle = function MovieCardSubTitle({ children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

MovieCard.Description = function MovieCardDescription({ children, ...restProps}) {
    return <Description {...restProps}>{children}</Description>;
};

MovieCard.Entities = function MovieCardEntities({ children, ...restProps}) {
    return <Entities {...restProps}>{children}</Entities>;
};

MovieCard.Meta = function MovieCardMeta({ children, ...restProps}) {
    return <Meta {...restProps}>{children}</Meta>;
};

MovieCard.Item = function MovieCardItem({ item, children, ...restProps}) {
    const {setShowMovieFeature, setItemMovieFeature } = useContext(MovieFeatureContext);
    
    return (
        <Item 
        onClick={() => {
            setItemMovieFeature(item);
            setShowMovieFeature(true);
        }}
            {...restProps}
        >
            {children }
        </Item>
    );
};

MovieCard.Image = function MovieCardImage({ ...restProps}) {
    return <Image {...restProps} />;
};

MovieCard.MovieFeature = function MovieCardMovieFeature({ children, category, ...restProps}) {
    const { showMovieFeature, itemMovieFeature, setShowMovieFeature } = useContext(MovieFeatureContext);

    return showMovieFeature ? (
        <MovieFeature
        {...restProps}
        src={`/images/${category}/${itemMovieFeature.genre}/${itemMovieFeature.slug}/large.jpg`}>
                <Content>
                    <MovieFeatureTitle>{itemMovieFeature.title}</MovieFeatureTitle>
                    <MovieFeatureDescription>{itemMovieFeature.description}</MovieFeatureDescription>
                    <MovieFeatureClose onClick={() => setShowMovieFeature(false)}>
                        <img src="/images/icons/close.png" alt="Close" />
                    </MovieFeatureClose>
                
                    <GroupMovie margin ="30px 0" flexDirection="row" alignItems="center">
                     <Maturity rating ={itemMovieFeature.maturity}> 
                        {itemMovieFeature.maturity < 12 ? 'PG' : itemMovieFeature.maturity}
                    </Maturity>
                         <MovieFeatureDescription fontWeight="bold">
                             {itemMovieFeature.genre.charAt(0).toUpperCase() + itemMovieFeature.genre.slice(1)}
                         </MovieFeatureDescription>
                    </GroupMovie>

                    {children}
                </Content> 
             </MovieFeature>
    ) : null;
} ;