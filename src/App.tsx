import { useEffect, useState } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPictures } from "./services/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

export interface Picture {
  id: string;
  likes: number;
  description: string;
  urls: {
    regular: string;
    small: string;
  };
}

function App() {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPic, setSelectedPic] = useState<string>("");

  useEffect(() => {
    const getPictures = async () => {
      if (!query.trim()) {
        return;
      }

      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchPictures(query, page);
        setPictures((prev) => [...prev, ...results]);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (query !== "") {
      getPictures();
    }
  }, [query, page]);

  const handleChangeQuery = (newQuery: string): void => {
    if (newQuery === query) {
      return;
    }
    setQuery(newQuery);
    setPictures([]);
    setPage(1);
  };

  const handleChangePage = (): void => {
    setPage((prev) => prev + 1);
  };

  const openModal = (urlLarge: string): void => {
    setIsModalOpen(true);
    setSelectedPic(urlLarge);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedPic("");
  };

  return (
    <>
      <SearchBar onSearch={handleChangeQuery} />
      {pictures.length > 0 && (
        <ImageGallery pictures={pictures} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {isModalOpen && <ImageModal picture={selectedPic} onClose={closeModal} />}
      {pictures.length > 0 && <LoadMoreBtn onClick={handleChangePage} />}
    </>
  );
}

export default App;
