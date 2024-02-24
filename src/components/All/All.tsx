import * as React from "react";
import {Country,Population,Area} from "../../models/Country";
import SortButton, {SortType} from "./SortButton";

export interface IAllProps {
  readonly countries: Array<Country>;
  readonly population: Array<Population>;
  readonly area: Array<Area>;
  readonly currentSort?: SortType;
  readonly setCurrentSort: (_: SortType) => void;
  readonly sortAsc: boolean;
  
}

export const All = (props: IAllProps): JSX.Element => (
   <div className="all-cities-table">
     <table>
       <thead>
         <tr>
           <th>
             Name <SortButton type="name" {...props} ></SortButton>
           </th>
           <th>
             Population <SortButton type="population" {...props} ></SortButton>
           </th>
           <th>
             Area <SortButton type="area" {...props}></SortButton>
           </th>
         </tr>
       </thead>
       <tbody>
          {props.population.map(item1 => {
           const matchingItem = props.area.find(item2 => item2.country === item1.country);
           return (
             <tr key={item1.country}>
               <td> {item1.country}</td>
               <td>{item1.population}</td>
               <td>{matchingItem ? matchingItem.area : 'N/A'}</td>
             </tr>
           );
         })}
      </tbody>
     </table>
   </div>
 );
