import { useState, useEffect } from "react"
import "./CurrentExpertArticles.scss";
import CustomInputFile from "../../../../../custom/customInputFile/CustomInputFile";
import { fetchArticlesByExpertId, createOneArticle, deleteOneArticle } from "../../../../../http/articlesApi"
import DeleteImage from "../../../../../assets/images/delete.svg";
import WordImage from "../../../../../assets/images/wordIcon.svg";

function CurrentExpertArticles({ expertId }) {
    const [articles, setArticles] = useState([]);
    const [articlesToRemove, setArticlesToRemove] = useState([]);
    useEffect(() => {
        fetchArticlesByExpertId(expertId).then(data => setArticles(data));
    }, []);
    function handleChangeArray(index, data, isNameInput) {
        let newArr = articles;
        if (isNameInput) {
            newArr[index].name = data;
        } else {
            newArr[index].file = data;
        }
        setArticles(newArr);
    }
    const removeItem = (indexToRemove) => {
        if (articles[indexToRemove].id) {
            let newArr = articlesToRemove;
            newArr.push({ id: articles[indexToRemove].id });
            setArticlesToRemove(newArr);
        }
        setArticles(prevArray => {
            const newArray = [...prevArray.slice(0, indexToRemove), ...prevArray.slice(indexToRemove + 1)];
            return newArray;
        });
    };
    function addArticles() {
        let dataToSend = [];
        for (let i = 0; i < articlesToRemove.length; i++) {
            deleteOneArticle(articlesToRemove[i].id);
        }
        for (let i = 0; i < articles.length; i++) {
            if (articles[i].file instanceof File || articles[i].file instanceof Blob) {
                dataToSend.push(articles[i]);
                const formData = new FormData();
                formData.append('name', articles[i].name);
                formData.append('file', articles[i].file);
                formData.append('expertId', articles[i].expertId);
                createOneArticle(formData);
            }
        }
        alert("Статьи добавлены");
        window.location.reload();
    }
    return (
        <section className="current_articles">
            <h3 className="h3_text">Статьи</h3>
            <div className="articles_container">
                {articles &&
                    <>
                        {
                            articles.map((item, index) => (
                                <div className={item.file.name ? "articles_container_item" : "articles_container_item-ready"} key={index}>
                                    {
                                        item.file.name ?
                                            <>
                                                <input className="my_input" type="text" onChange={(e) => handleChangeArray(index, (e.target.value || item.name), true)} placeholder={item.name} />
                                                <div className="file-input-container">
                                                    <input type="file" id="fileInput" className="file-input" onChange={(e) => handleChangeArray(index, e.target.files[0], false)} />
                                                    <label htmlFor="fileInput" className="custom-button">{item.file.name}</label>
                                                </div>
                                                <img src={DeleteImage} alt="delete" onClick={() => removeItem(index)} />
                                            </>
                                            :
                                            <>
                                                <p className="paragraph_text">{item.name}</p>
                                                <a href={process.env.REACT_APP_API_URL + item.file}>
                                                    <img src={WordImage} alt="image" />
                                                </a>
                                                <img src={DeleteImage} alt="delete" onClick={() => removeItem(index)} />
                                            </>
                                    }
                                </div>
                            ))
                        }
                    </>
                }
            </div>
            <div className="reducting_buttons">
                <button className="button" onClick={() => setArticles([...articles, { name: "Название статьи", file: { name: "Выберите файл" }, expertId: expertId }])}>Добавить</button>
                <button className="button" onClick={() => addArticles()}>Применить изменения</button>
            </div>
        </section >
    )
}
export default CurrentExpertArticles