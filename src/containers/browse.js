import React, {useState, useContext, useEffect } from 'react';
import Fuse from 'fuse.js';
import {SelectProfileContainer} from './profiles';
import { FooterContainer } from './footer';
import { FirebaseContext} from '../context/firebase';
import {MovieCard, Header, Loading, Player} from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logoafronetfilmes.png';

export function BrowseContainer({slides}) {
    const [category, setCategory] = useState('series');
    const [searchText, setSearchText] = useState('');
    const [profile, setProfile ]= useState({});
    const [loading, setLoading] = useState(true);
    const [slideRows, setSlideRows] = useState([]);

    const {firebase} = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};


    useEffect(() => {
          setTimeout(() => {
          setLoading(false);
        }, 3000);

    }, [profile.displayName]);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    useEffect(() => {
        const fuse = new Fuse(slideRows, {kyes: ['data.description', 'data.title', 'data.genre'] });
        const results = fuse.search(searchText).map(({item}) => item);
       
        if (slideRows.length > 0 && searchText.length > 3 && results.length > 0) { 
            setSlideRows(results);
            } else { 
                setSlideRows(slides[category]);
            }
    }, [searchText, category, slideRows, slides]);

    return profile.displayName ? (
    <>
    {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

        <Header src="joker1" dontShowOnSmallViewport>
        <Header.Frame>
        <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="AfroneFilmes" />
            <Header.TextLink active={category ==='series' ? 'true': 'false'} onClick={()=> setCategory('series')}>
                Séries
            </Header.TextLink>
            <Header.TextLink active={category ==='films' ? 'true': 'false'} onClick={()=> setCategory('films')}>
                Filmes
            </Header.TextLink>
        </Header.Group>
        <Header.Group>
          <Header.Search searchText={searchText} setSearchText={setSearchText} />
            <Header.Profile>
                    <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                    <Header.Picture src={user.photoURL} />
                    <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                    <Header.TextLink onClick={() => firebase.auth().signOut()}>Sair</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
        </Header.Group>
        </Header.Frame>

           <Header.Feature>
               <Header.FeatureTitle>Assista Joker Agora</Header.FeatureTitle>
                    <Header.Description> 
                    Para sempre sozinho na multidão, o comediante fracassado Arthur Fleck busca conexão enquanto caminha pelas ruas de Gotham
                    Cidade. Arthur usa duas máscaras - a que ele pinta para seu trabalho diário como palhaço, e o disfarce que ele projeta em um
                    tentativa fútil de se sentir parte do mundo ao seu redor.
                    </Header.Description>
               <Header.PlayButton>Assistir</Header.PlayButton>
               <Header.ButtonViewMore>Informações</Header.ButtonViewMore>
           </Header.Feature>
        </Header>

        <MovieCard.Group>
            {slideRows.map((slideItem) => (
                <MovieCard key={`${category}-${slideItem.title.toLowerCase()}`}>
                    <MovieCard.Title>{slideItem.title}</MovieCard.Title>
                    <MovieCard.Entities>
                        {slideItem.data.map((item) => (
                        <MovieCard.Item key={item.docId} item={item}>
                            <MovieCard.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                            <MovieCard.Mata>
                                <MovieCard.SubTitle>{item.title}</MovieCard.SubTitle>
                                <MovieCard.Description>{item.description}</MovieCard.Description>
                            </MovieCard.Mata>
                        </MovieCard.Item>
                        ))}
                    </MovieCard.Entities>
                        <MovieCard.MovieFeature category={category}> 
                            <Player>
                                <Player.Button />
                                <Player.Video src="/videos/filme.mp4" />
                            </Player>
                        </MovieCard.MovieFeature>
                </MovieCard>
            ))}
        </MovieCard.Group>
        <FooterContainer />
        </>
    ) : (
     <SelectProfileContainer user={user} setProfile={setProfile} />
    );
}