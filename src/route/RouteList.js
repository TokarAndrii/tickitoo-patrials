import React, {Fragment} from 'react';
import RouteItem from './RouteItem';
import PropTypes from "prop-types";

const RouteList = function ({ listRoute, fullView }) {

    const filteredList = !listRoute ? 
        null :  fullView ? 
        listRoute : listRoute.filter((item, index) => index === 0 || index === listRoute.length - 1);

    return  (
        <Fragment>
            {
                listRoute &&
                filteredList.map((itemRoute, index) => {
                    return (
                            <RouteItem 
                                key={itemRoute.id}
                                {...itemRoute}
                                isActive={index === 0 || index === filteredList.length - 1}
                            />
                        )
                })
            }
        </Fragment>
    )
};

RouteList.propTypes = {
    listRoute: PropTypes.array.isRequired,
    fullView: PropTypes.bool.isRequired,
};


export default RouteList;

// TICKI-18 Trip Route Component
// Description: Создать функциональный компонент который будет отображать маршрут поездки по остановкам с описанием https://take.ms/29wiN. 
// Первый и последний элементы массива должны иметь класс highlighted.

// Props:

// {}
// bool
// Props Description: В пропсах будет:

// массив с данными Станция, Описание, Время
// bool Full view (нужен для того чтобы отображать промежуточные станции или только станции отправки прибытия + время в пути) https://take.ms/LmW8c
// Props Source: Пропсы у нас могут приходить от родительского компонента либо браться из стор, это я буду описывать. в данном случае от родительского

// CSS specs: Используем SASS/SCSS из предоставленной верстки переформатировать в SASS