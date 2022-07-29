#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { WishlistWidgetCdkApp01Stack } from '../lib/wishlist-widget-cdk-app-01-stack';

const app = new cdk.App();
new WishlistWidgetCdkApp01Stack(app, 'WishlistWidgetCdkApp01Stack');
