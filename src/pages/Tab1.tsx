import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Component } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

import { Virtuoso } from 'react-virtuoso'

type Props = {}
type State = {}

class Tab1 extends Component <Props, State> {

  constructor(props: Props) {
    super(props);


  }

  generateTest() {

    let array = [];

    for (let i = 0; i < 200; i++) {
      array.push(i);
    }

    return array

  }

  render() {

    return (
      <IonContent>

        <Virtuoso
          useWindowScroll
          data={this.generateTest()}
          itemContent={(index: any, item: any) => (

            <div>
              {item}
            </div>
              
          )}
        />

        {/* <div className="allContentContainer">
          <div className="contentContainer">  
            <div className="content content-border">
              <div className="listContainer">  */}
                {/* PLACE VIRTUOSO IN HERE */}
              {/* </div>
            </div>
          </div>
        </div> */}
      </IonContent>
    )

  }


}

export default Tab1;
