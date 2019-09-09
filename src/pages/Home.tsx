import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonCheckbox, IonLabel, IonNote, IonBadge, IonGrid, IonRow,IonCol, IonFooter } from '@ionic/react';
import React from 'react';
import { add } from 'ionicons/icons';


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
                    <h1>Formation</h1>
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
          <IonItem>
            <IonLabel>
              <IonRow>
                  <IonCol>
                    <h1>1</h1>
                  </IonCol>
                  <IonCol>
                    <h1>2</h1>
                  </IonCol>
                  <IonCol>
                    <h1>4</h1>
                  </IonCol>
                  <IonCol>
                    <h1>WING</h1>
                  </IonCol>
                  <IonCol>
                    <h1>PASS</h1>
                  </IonCol>
                  <IonCol>
                    <h1>EVEREST</h1>
                  </IonCol>
                  <IonCol>
                    <h1>COMP</h1>
                  </IonCol>
                  <IonCol>
                    <h1>12</h1>
                  </IonCol>
                </IonRow>
            </IonLabel>
          </IonItem>
        </IonList>

        <IonFooter>
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
                    <h1>Formation</h1>
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
        </IonFooter>
        </IonContent>
    </>
  );
};

export default Home;