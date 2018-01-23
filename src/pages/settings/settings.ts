import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
import { NativeAudio } from '@ionic-native/native-audio';
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public SmartAudioProvider: SmartAudioProvider, private nativeAudio : NativeAudio, public plt: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');

  }
  nativeaudio() {
    this.plt.ready().then(()=>{
    this.nativeAudio.preloadComplex('test', '/www/assets/audio/sweep.mp3',1,1,0).then(() => console.log('Request successful'),
    error => console.log('Error requesting location permissions', error));
    this.nativeAudio.play('test', () => console.log('test is done playing'));


    });

  }
  loadplayTab() {

    this.SmartAudioProvider.preload('test','https://ia800406.us.archive.org/16/items/JM2013-10-05.flac16/V0/jm2013-10-05-t30-MP3-V0.mp3');
    this.SmartAudioProvider.play('test'); 
  }
playTab() {

  this.SmartAudioProvider.play('test');
}

}
