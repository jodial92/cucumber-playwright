import { Then } from "@cucumber/cucumber";
import { expect } from '@playwright/test';
import { ElementKey } from '../../env/global';
import { getElementLocator } from '../../support/web-element-helper';

Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function(elementKey: ElementKey, expectedElementText: string) {
        const {
            screen: {page},
            globalVariables,
            globalConfig,
        } = this;
        
        console.log(`the ${elementKey} header should contain the text ${expectedElementText}`);
        
        const elementIdentifier = getElementLocator(page, elementKey, globalVariables, globalConfig);
        const content = await page.textContent(elementIdentifier);
        
        expect(content).toBe(expectedElementText);
    }
);

Then(
    /^the "([^"]*)" should be displayed$/,
    async function(elementKey: string) {
        const {
            screen: {page},
            globalVariables,
            globalConfig,
        } = this;
        
        console.log(`the ${elementKey} should be displayed`);

        const elementIdentifier = getElementLocator(page, elementKey, globalVariables, globalConfig);
        const locator = await page.locator(elementIdentifier);
        
        await expect(locator).toBeVisible();
    }
);