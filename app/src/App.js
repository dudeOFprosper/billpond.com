import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';
import {GlobalStyle} from "./styleObjects/Global";
import Header from './components/Header';
import './App.css';
import profilePhoto from "./images/profile.jpg";

const Styles = StyleSheet.create({
  column: {
    width: "48%", 
  }, 
  content: {
    backgroundColor: '#fff',
    border: "5px solid #b44131",
    margin: "20px 0px",
    padding: 10,
    display: "flex",
    flexWrap: "wrap",
  },
  userInfo: {
    fontSize: 14,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  profile: {
    height: "250px",
    marginRight: 20
  },
  userName: {
    marginBottom: 20
  }, 
  mood: {
    display: "block",
    fontSize: 14,
    marginTop: 10
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="AppWrapper">
          <Header />
          <section className={css(Styles.column)}>
            <div className={css(Styles.content)}>
              <img className={css(Styles.profile)} src={profilePhoto} alt="Cool guy wearing sunglasses at PEOPLE festival" />
              <ul className={css(Styles.userInfo)}>
                <li className={css(Styles.userName)}>Bill Pond</li>
                <li>Male</li>
                <li>26 Years Old</li>
                <li>North Haven, Connecticut</li>
                <li className={css(GlobalStyle.marginTopAuto)}>Last Login: 11/13/2018</li> 
              </ul>
              <span className={css(Styles.mood)}>Mood: Alright thanks for asking &#x1F643;</span>
            </div>
            <div className={css(Styles.content)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed faucibus lectus. Nam consequat ultricies lorem sit amet ultrices. Vestibulum tempus purus vitae dignissim bibendum. Mauris lacinia vitae nibh nec rhoncus. Vestibulum accumsan dolor nisl. Nullam nec mauris tempor, dapibus ipsum vel, rhoncus nibh. Vivamus rutrum ex vel dui bibendum, vel posuere augue vehicula.
              In hac habitasse platea dictumst. Aliquam erat volutpat. Aliquam vehicula et nisl vitae finibus. Vestibulum vitae blandit nunc. Maecenas ac accumsan urna, sed consequat metus. Cras tincidunt euismod euismod. Nunc consectetur quam nec iaculis commodo.
              Nam at ex et purus vulputate aliquam eget vitae ex. Ut ullamcorper commodo nibh in porttitor. Curabitur rhoncus porta mollis. Cras id ultricies tellus. Mauris et aliquet mi, quis pretium nisi. Pellentesque ut nulla diam. Nunc fermentum nibh at orci hendrerit tempus nec et nunc. Curabitur dignissim metus vitae sapien cursus, faucibus tempus libero pulvinar. Nunc eget arcu auctor dui suscipit scelerisque. Curabitur dolor sem, commodo eu urna nec, gravida aliquam felis. Quisque in leo efficitur, volutpat est eu, faucibus elit. Vestibulum eget nulla elementum, lacinia mauris et, sodales erat. Vestibulum mauris purus, rutrum id sollicitudin nec, porta at est. Curabitur in pulvinar arcu. Suspendisse potenti. Etiam mattis turpis non mi posuere, ac euismod enim pulvinar.
            </div>
          </section>
          <section className={css(Styles.column)}>
            <div className={css(Styles.content)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed faucibus lectus. Nam consequat ultricies lorem sit amet ultrices. Vestibulum tempus purus vitae dignissim bibendum. Mauris lacinia vitae nibh nec rhoncus. Vestibulum accumsan dolor nisl. Nullam nec mauris tempor, dapibus ipsum vel, rhoncus nibh. Vivamus rutrum ex vel dui bibendum, vel posuere augue vehicula.
              In hac habitasse platea dictumst. Aliquam erat volutpat. Aliquam vehicula et nisl vitae finibus. Vestibulum vitae blandit nunc. Maecenas ac accumsan urna, sed consequat metus. Cras tincidunt euismod euismod. Nunc consectetur quam nec iaculis commodo.
              Nam at ex et purus vulputate aliquam eget vitae ex. Ut ullamcorper commodo nibh in porttitor. Curabitur rhoncus porta mollis. Cras id ultricies tellus. Mauris et aliquet mi, quis pretium nisi. Pellentesque ut nulla diam. Nunc fermentum nibh at orci hendrerit tempus nec et nunc. Curabitur dignissim metus vitae sapien cursus, faucibus tempus libero pulvinar. Nunc eget arcu auctor dui suscipit scelerisque. Curabitur dolor sem, commodo eu urna nec, gravida aliquam felis. Quisque in leo efficitur, volutpat est eu, faucibus elit. Vestibulum eget nulla elementum, lacinia mauris et, sodales erat. Vestibulum mauris purus, rutrum id sollicitudin nec, porta at est. Curabitur in pulvinar arcu. Suspendisse potenti. Etiam mattis turpis non mi posuere, ac euismod enim pulvinar.
            </div>
            <div className={css(Styles.content)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed faucibus lectus. Nam consequat ultricies lorem sit amet ultrices. Vestibulum tempus purus vitae dignissim bibendum. Mauris lacinia vitae nibh nec rhoncus. Vestibulum accumsan dolor nisl. Nullam nec mauris tempor, dapibus ipsum vel, rhoncus nibh. Vivamus rutrum ex vel dui bibendum, vel posuere augue vehicula.
              In hac habitasse platea dictumst. Aliquam erat volutpat. Aliquam vehicula et nisl vitae finibus. Vestibulum vitae blandit nunc. Maecenas ac accumsan urna, sed consequat metus. Cras tincidunt euismod euismod. Nunc consectetur quam nec iaculis commodo.
              Nam at ex et purus vulputate aliquam eget vitae ex. Ut ullamcorper commodo nibh in porttitor. Curabitur rhoncus porta mollis. Cras id ultricies tellus. Mauris et aliquet mi, quis pretium nisi. Pellentesque ut nulla diam. Nunc fermentum nibh at orci hendrerit tempus nec et nunc. Curabitur dignissim metus vitae sapien cursus, faucibus tempus libero pulvinar. Nunc eget arcu auctor dui suscipit scelerisque. Curabitur dolor sem, commodo eu urna nec, gravida aliquam felis. Quisque in leo efficitur, volutpat est eu, faucibus elit. Vestibulum eget nulla elementum, lacinia mauris et, sodales erat. Vestibulum mauris purus, rutrum id sollicitudin nec, porta at est. Curabitur in pulvinar arcu. Suspendisse potenti. Etiam mattis turpis non mi posuere, ac euismod enim pulvinar.
            </div>
            <div className={css(Styles.content)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed faucibus lectus. Nam consequat ultricies lorem sit amet ultrices. Vestibulum tempus purus vitae dignissim bibendum. Mauris lacinia vitae nibh nec rhoncus. Vestibulum accumsan dolor nisl. Nullam nec mauris tempor, dapibus ipsum vel, rhoncus nibh. Vivamus rutrum ex vel dui bibendum, vel posuere augue vehicula.
              In hac habitasse platea dictumst. Aliquam erat volutpat. Aliquam vehicula et nisl vitae finibus. Vestibulum vitae blandit nunc. Maecenas ac accumsan urna, sed consequat metus. Cras tincidunt euismod euismod. Nunc consectetur quam nec iaculis commodo.
              Nam at ex et purus vulputate aliquam eget vitae ex. Ut ullamcorper commodo nibh in porttitor. Curabitur rhoncus porta mollis. Cras id ultricies tellus. Mauris et aliquet mi, quis pretium nisi. Pellentesque ut nulla diam. Nunc fermentum nibh at orci hendrerit tempus nec et nunc. Curabitur dignissim metus vitae sapien cursus, faucibus tempus libero pulvinar. Nunc eget arcu auctor dui suscipit scelerisque. Curabitur dolor sem, commodo eu urna nec, gravida aliquam felis. Quisque in leo efficitur, volutpat est eu, faucibus elit. Vestibulum eget nulla elementum, lacinia mauris et, sodales erat. Vestibulum mauris purus, rutrum id sollicitudin nec, porta at est. Curabitur in pulvinar arcu. Suspendisse potenti. Etiam mattis turpis non mi posuere, ac euismod enim pulvinar.
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
