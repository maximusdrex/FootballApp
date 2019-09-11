import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonLabel, IonRow,IonCol, IonGrid, IonButton, IonInput, IonSelect, IonSelectOption } from '@ionic/react';
import React from 'react';
import { add } from 'ionicons/icons';
import { removePropertiesDeep } from '@babel/types';

function InRow() {
  return(
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonInput placeholder="Play" type="number"></IonInput>
        </IonCol>
        <IonCol>
          <IonInput placeholder="Down" type="number"></IonInput>
        </IonCol>
        <IonCol>
          <IonInput placeholder="Distance" type="number"></IonInput>
        </IonCol>
        <IonCol>
          <IonSelect placeholder="Formation">
            <IonSelectOption value="value">WING</IonSelectOption>
            <IonSelectOption value="value2">TRIO</IonSelectOption>
          </IonSelect>
        </IonCol>
        <IonCol>
        <IonSelect placeholder="Type">
            <IonSelectOption value="value">PASS</IonSelectOption>
            <IonSelectOption value="value2">RUN</IonSelectOption>
          </IonSelect>
        </IonCol>
        <IonCol>
          <IonInput placeholder="Play"></IonInput>
        </IonCol>
        <IonCol>
          <IonSelect placeholder="Result">
            <IonSelectOption value="value">INC</IonSelectOption>
            <IonSelectOption value="value2">COMP</IonSelectOption>
          </IonSelect>
        </IonCol>
        <IonCol size="1">
          <IonInput placeholder="GN/LS" type="number"></IonInput>
        </IonCol>
        <IonCol size="1">
          <IonButton><IonIcon icon={add} /></IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

function PlayItem(props: any) {
  return(
    <IonItem>
      <IonLabel>
        <IonRow>
            <IonCol>
              <h1>{props.playNum}</h1>
            </IonCol>
            <IonCol>
              <h1>{props.down}</h1>
            </IonCol>
            <IonCol>
              <h1>{props.distance}</h1>
            </IonCol>
            <IonCol>
              <h1>{props.formation}</h1>
            </IonCol>
            <IonCol>
              <h1>{props.motion}</h1>
            </IonCol>
            <IonCol>
              <h1>{props.play}</h1>
            </IonCol>
            <IonCol>
              <h1>{props.result}</h1>
            </IonCol>
            <IonCol>
              <h1>{props.gain}</h1>
            </IonCol>
          </IonRow>
      </IonLabel>
    </IonItem>
  );
}

const Home: React.FunctionComponent = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Football Stats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div slot="fixed">
          <IonItem>
              <IonLabel>
                <IonRow>
                  <IonCol>
                    <h1>Play #</h1>
                  </IonCol>
                  <IonCol>
                    <h1>Down</h1>
                  </IonCol>
                  <IonCol>
                    <h1>Distance</h1>
                  </IonCol>
                  <IonCol>
                    <h1>Motion</h1>
                  </IonCol>
                  <IonCol>
                    <h1>Type</h1>
                  </IonCol>
                  <IonCol>
                    <h1>Play</h1>
                  </IonCol>
                  <IonCol>
                    <h1>Result</h1>
                  </IonCol>
                  <IonCol>
                    <h1>GN/LS</h1>
                  </IonCol>
                </IonRow>
              </IonLabel>
          </IonItem>
        </div>
          
        <IonList>
          <IonItem>

          </IonItem>
          <PlayItem></PlayItem>
          <PlayItem playNum="5"></PlayItem>
        </IonList>
        
        <InRow></InRow>
        </IonContent>
    </>
  );
};

export default Home;