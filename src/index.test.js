'use strict';

global.wx = {};
let chai = require('chai');
let expect = chai.expect;
chai.use(require('chai-as-promised'));
let sinon = require('sinon');

global.wx.downloadFile = (params) => {
  params.success();
};

global.wx.request = (params) => {
  params.fail();
};

let wxPromisify = require('./index.js');

describe('wx-miniapp-promisify', () => {
  it('should return if method is supported', () => {
    expect(wxPromisify.isPromisable('notSupported')).to.be.false;
    expect(wxPromisify.isPromisable('downloadFile')).to.be.true;
  });

  it('second test', () => {
    let callback = sinon.spy();
    let callback2 = sinon.spy();
    let params = {
      success: callback
    };
    let params2 = {
      fail: callback2
    };
    let promise = wxPromisify.downloadFile(params);
    promise.catch(() => {});
    let promise2 = wxPromisify.request(params2);
    promise2.catch(() => {});
    expect(callback.called).to.be.true;
    expect(callback2.called).to.be.true;
  });
});
